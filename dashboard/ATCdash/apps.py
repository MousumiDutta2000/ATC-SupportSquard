from django.apps import AppConfig


class AtcdashConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'ATCdash'

    def ready(self):
        import ATCdash.signals