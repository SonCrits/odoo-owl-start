from odoo import fields, models


class TodoAppOwl(models.Model):
    _name = 'todo.list.app'
    _description = "OWL Todo List App"

    name = fields.Char(string='Task Name', required=True)
    is_completed = fields.Boolean(string='Is Completed')
    color = fields.Char(string='Color')
