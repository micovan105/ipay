[app]
# (str) Application title
title = UNO

# (str) Package name
package.name = unoapp

# (str) Package domain (needed for android package name)
package.domain = com.micovan107

# (str) Source code where main.py lives
source.dir = .

# (str) Main filename
source.main = app.py

# (str) Application version
version = 1.0.0

# (str) Application requirements
requirements = python3,kivy,pyjnius

# (str) Supported orientation (portrait, landscape, all)
orientation = portrait

# (list) Permissions
android.permissions = INTERNET

# (str) Icon of the application
icon.filename = %(source.dir)s/public/apple-icon.png

# (bool) Presplash of the application
presplash.filename = %(source.dir)s/public/apple-icon.png

# (str) Supported architecture (android arm64-v8a, armeabi-v7a, x86, x86_64)
android.archs = arm64-v8a, armeabi-v7a

# (bool) Fullscreen mode
fullscreen = 1

# (bool) Copy data files into the application package
source.include_exts = py,png,jpg,jpeg,html,css,js,json,webmanifest

[buildozer]
# (str) Log level (0 = error only, 1 = warning, 2 = info, 3 = debug)
log_level = 2

# (str) Warn on root permissions
warn_on_root = 1
