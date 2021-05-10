from storages.backends.s3boto3 import S3Boto3Storage
from django.conf import settings


class StaticStorage(S3Boto3Storage):
    location = settings.AWS_STATIC_LOCATION


class MediaStorage(S3Boto3Storage):
    location = 'media'
    file_overwrite = False

