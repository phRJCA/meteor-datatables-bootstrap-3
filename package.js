Package.describe({
    summary: "DataTable - jQuery plugin for sortable, pagable data",
    name: "loftsteinn:datatables-bootstrap3",
    version: "0.2.0",
    git: "https://github.com/oskarszoon/meteor-datatables-bootstrap3"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('ian:bootstrap-3@1.0.2', 'client');
  api.add_files([
    'lib/jquery.dataTables.js',
    'lib/datatables.js',
    'lib/jquery.dataTables.css',
    'lib/datatables.css',
    'lib/images/sort_asc.png',
    'lib/images/sort_asc_disabled.png',
    'lib/images/sort_both.png',
    'lib/images/sort_desc.png',
    'lib/images/sort_desc_disabled.png',
  ], 'client');
});

Package.on_test( function(api) {
    api.use('loftsteinn:datatables-bootstrap3');

    api.use('test-helpers');
    api.use('tinytest');

    api.add_files("tests/test.js");
});
