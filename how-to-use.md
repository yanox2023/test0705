# アプリの使い方1

## スタッフ通知で新規注文にeギフト注文情報を追加する 

```liquid
{% assign is_egift_order = false %}
{% for line in line_items %}
  {% if line.properties['_egiftnow_egift_buy'] == '1' %}
    {% assign is_egift_order = true %}
    {% break %}
  {% endif %}
{% endfor %}

{% if is_egift_order %}
  <p><strong>この注文はeギフト注文です。</strong></p>
{% endif %}
```

::: info
- 設定 → 通知 → スタッフへの通知 → 新規注文 を開く
- 上のコードスニペットをメール本文に追加する
:::

