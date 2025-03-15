from odoo import api, fields, models, _

class DiscussChannel(models.Model):
    """ Chat Session
        Reprensenting a conversation between users.
        It extends the base method for anonymous usage.
    """

    _name = 'discuss.channel'
    _inherit = ['discuss.channel']

    evo_connector = fields.Many2one('evo.connector', 'Connector', index='btree_not_null')