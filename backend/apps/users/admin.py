from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ("email", "full_name", "is_staff", "is_active")
    ordering = ("email",)

    fieldsets = UserAdmin.fieldsets + (
        ("Profile", {"fields": ("full_name",)}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ("Profile", {"fields": ("full_name",)}),
    )
