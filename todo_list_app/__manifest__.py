{
    'name': 'OWL Tutorial',
    'description': '*** OWL Tutorial ***',
    'category': 'OWL',
    'summary': 'OWL Tutorial',
    'sequence': -1,
    'version': '1.1',
    'depends': ['base', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/todo_list_app.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'todo_list_app/static/src/components/*/*.js',
            'todo_list_app/static/src/components/*/*.xml',
            'todo_list_app/static/src/components/*/*.scss',
        ],
    },
    'installable': True,
    'application': True,
    'license': 'OPL-1'
}
