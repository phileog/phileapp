import AWS from 'aws-sdk';
import awspublish from 'gulp-awspublish';
import gulp from 'gulp';
import gutil from 'gulp-util';
import merge from 'merge-stream';
import path from 'path';
import rename from 'gulp-rename';

// TODO - aws s3 rm --recursive s3://cdn.phileogeleven.com/static/SNCF/soiree_mes/test/

// const S3_BUCKET = 'assets.mattv.phileog.com';
// const baseUrl = 'https://mattv.sncf.fr';
const publicDir = path.join(__dirname, '..', 'build');

const awsProfile = process.env.AWS_PROFILE || 'default';
const awsCreds = new AWS.SharedIniFileCredentials({ profile: awsProfile });

// define custom headers
const headers = {
  'Cache-Control': 'max-age=600', // , no-transform, public'
  // 'Cache-Control': 'public, must-revalidate, proxy-revalidate, max-age=0', // FIXME https://stackoverflow.com/a/18779381
  // ...
};

process.chdir(__dirname);

// get args command line
// gulp mail --toto tata => getArg('--toto') = tata
const getArg = key => {
  const index = process.argv.indexOf(key);
  const next = process.argv[index + 1];
  if (index < 0) {
    return null;
  }
  if (!next || next[0] === '-') {
    return true;
  }
  return next;
};

const encodeRFC5987ValueChars = str =>
  encodeURIComponent(str)
    // Note that although RFC3986 reserves "!", RFC5987 does not, so we do not need to escape it
    .replace(/['()]/g, escape) // i.e., %27 %28 %29
    .replace(/\*/g, '%2A')
    // The following are not required for percent-encoding per RFC5987, so we can allow for a little better readability over the wire: |`^
    .replace(/%(?:7C|60|5E)/g, unescape);

const publish = ({ bucket, targetPath = '', region = 'us-east-1' }) => () => {
  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create({
    params: {
      Bucket: bucket,
    },
    credentials: awsCreds,
    region,
  });
  gutil.log(
    gutil.colors.cyan('[phileapp]'),
    'Publishing to',
    gutil.colors.yellow.bold(targetPath),
  );
  process.chdir(__dirname);
  const gzip = gulp
    .src([
      `${publicDir}/**/*.{js,json}`,
      `${publicDir}/**/*.html`,
      `${publicDir}/**/*.css`,
    ])
    .pipe(
      rename(dirPath => {
        dirPath.dirname = `${targetPath}/${dirPath.dirname}`; // eslint-disable-line
      }),
    )
    .pipe(awspublish.gzip(/* { ext: '.gz' } */));
  const plain = gulp
    .src([
      `${publicDir}/**/*`,
      `!${publicDir}/**/*.{js,json}`,
      `!${publicDir}/**/*.html`,
      `!${publicDir}/**/*.css`,
    ])
    .pipe(
      rename(dirPath => {
        dirPath.dirname = `${targetPath}/${dirPath.dirname}`; // eslint-disable-line
      }),
    );

  return (
    merge(plain, gzip)
      // publisher will add Content-Length, Content-Type and headers specified above
      // If not specified it will set x-amz-acl to public-read by default
      .pipe(
        publisher.publish(headers, { noAcl: bucket === 'www.envol2020.com' }),
      )
      // create a cache file to speed up consecutive uploads
      .pipe(publisher.cache())
      // .pipe(publisher.sync()) // DANGER !!
      // print upload updates to console
      .pipe(awspublish.reporter())
  );
};

gulp.task(
  'publish',
  publish({
    bucket: S3_BUCKET,
    targetPath: '',
    region: 'eu-west-1',
  }),
);

// gulp.task('release', publish({ bucket: 'www.envol2020.com' }))

gulp.task('default', gulp.series('publish'));
