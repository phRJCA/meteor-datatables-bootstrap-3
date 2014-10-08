Package.describe({
    summary: "DataTable - jQuery plugin for sortable, pagable data",
    name: "c316:datatables-bootstrap3",
    version: "0.2.1",
    git: "https://github.com/c316/meteor-datatables-bootstrap3"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('mizzao:bootstrap-3@3.2.0', 'client');
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
        'c316:datatables-bootstrap3',
        'test-helpers',
        'tinytest'
    ], ['client']);

    api.add_files("tests/test.js", ['client']);
});
