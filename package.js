Package.describe({
    summary: "DataTable - jQuery plugin for sortable, pagable data",
    name: "j4507:datatables-bootstrap-3",
    version: "0.2.4",
    git: "https://github.com/c316/meteor-datatables-bootstrap-3"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('twbs:bootstrap', 'client');
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
    api.use([
        'j4507:datatables-bootstrap-3',
        'test-helpers',
        'tinytest'
    ], ['client']);

    api.add_files("tests/test.js", ['client']);
});
