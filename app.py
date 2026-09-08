from __future__ import annotations

import webbrowser

from kivy.app import App
from kivy.uix.label import Label

TARGET_URL = "https://micovan107.github.io/uno/"


class UnoApp(App):
    title = "UNO"

    def build(self):
        try:
            from android.runnable import run_on_ui_thread
            from jnius import autoclass
        except ImportError:
            webbrowser.open(TARGET_URL)
            return Label(text="UNO đang mở trong trình duyệt...")

        activity = autoclass("org.kivy.android.PythonActivity").mActivity
        WebView = autoclass("android.webkit.WebView")
        WebViewClient = autoclass("android.webkit.WebViewClient")
        LayoutParams = autoclass("android.widget.FrameLayout$LayoutParams")
        ViewGroup = autoclass("android.view.ViewGroup")

        @run_on_ui_thread
        def load_page():
            web_view = WebView(activity)
            web_view.setLayoutParams(LayoutParams(-1, -1))
            web_view.setWebViewClient(WebViewClient())
            web_view.getSettings().setJavaScriptEnabled(True)
            web_view.getSettings().setDomStorageEnabled(True)
            web_view.getSettings().setDisplayZoomControls(False)
            web_view.getSettings().setBuiltInZoomControls(False)
            activity.addContentView(web_view, LayoutParams(-1, -1))

        load_page()
        return Label(text="")


if __name__ == "__main__":
    UnoApp().run()
