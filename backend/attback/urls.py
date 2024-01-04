# urls.py in yourappname

from django.urls import path
from .views import StudentLoginView, TeacherLoginView

urlpatterns = [
    # Other paths...
    path('api/student-login/', StudentLoginView.as_view(), name='student-login-api'),
    path('api/teacher-login/', TeacherLoginView.as_view(), name='teacher-login-api'),
]



