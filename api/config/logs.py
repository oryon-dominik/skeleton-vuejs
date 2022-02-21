import logging
import logging.config

from pathlib import Path

logs_path = Path(__file__).parent.parent / "logs"
logs_path.mkdir(exist_ok=True)

LOG_LEVEL = logging.INFO

# usally the log-levels could be described as follows:
# 0: ERROR
# 1: WARN
# 2: NOTICE
# 3: INFO
# 4: TALKATIVE
# 5: CHATTY
# 6: DEBUG
# 7: VOMIT

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        'default': {
            'format': '{levelname}:     [{asctime}] {message}',
            'style': '{',
            'datefmt' : "%Y-%m-%d %H:%M:%S"
        },
        "rich": {
            'format': "{message}",
            'style': '{',
            "datefmt": "[%X]",
        },
    },
    "handlers": {
        "rich_console": {
            "class": "rich.logging.RichHandler",
            "level": LOG_LEVEL,
            "formatter": "rich",
        },
        "file": {
            "class": "logging.FileHandler",
            "level": LOG_LEVEL,
            "formatter": "default",
            "filename": str(logs_path / "application.log"),
        },
    },
    'loggers': {
        'application': {
            'handlers': ['rich_console', "file"],
            'level': LOG_LEVEL,
            'propagate': True,
        },
    }
}
# apply the config
logging.config.dictConfig(LOGGING)
