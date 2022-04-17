function build_figure(ticker) {
    new TradingView.widget(
        {
        "autosize": true,
        "symbol": `NASDAQ:${ticker}`,
        "interval": "D",
        "timezone": "CDT/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "container_id": "tradingview_6ec2e"
      }
        );
}
