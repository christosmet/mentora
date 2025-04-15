from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "password",
            "first_name",
            "last_name",
            "date_of_birth",
            "country",
            "is_creator",
        ]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
