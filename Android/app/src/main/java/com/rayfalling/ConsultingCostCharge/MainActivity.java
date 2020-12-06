package com.rayfalling.ConsultingCostCharge;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends Activity {
    protected WebSettings webSettings;
    protected WebView webView;
    protected boolean confirm;
    private Timer timer;
    private TimerTask timerTask;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        confirm = false;
        webView = (WebView) findViewById(R.id.webview);
        webView.loadUrl("file:///android_asset/index.html");

        webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        //其他细节操作
        webSettings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK); //关闭webview中缓存
        webSettings.setAllowFileAccess(true); //设置可以访问文件
        webSettings.setLoadsImagesAutomatically(true); //支持自动加载图片
        webSettings.setDefaultTextEncodingName("utf-8");//设置编码格式
    }

    @Override
    protected void onResume() {
        super.onResume();
        webSettings.setJavaScriptEnabled(true);
    }

    @Override
    protected void onStop() {
        super.onStop();
        webSettings.setJavaScriptEnabled(false);
    }

    public void onBackPressed() {
        if (!webView.canGoBack()) {
            if (!confirm) {
                Toast toast = Toast.makeText(this.getApplicationContext(), "再按一次返回键退出", Toast.LENGTH_LONG);
                toast.show();
                confirm = true;
                if (timer != null) {
                    timer.cancel();
                    timer = null;
                }
                if (timerTask != null) {
                    timerTask = null;
                }
                timerTask = new TimerTask() {
                    @Override
                    public void run() {
                        confirm = false;
                    }
                };
                timer = new Timer();
                timer.schedule(timerTask, 1000);
            } else {
                super.onBackPressed();
                this.finish();
            }
        } else {
            webView.goBack();
        }
    }
}