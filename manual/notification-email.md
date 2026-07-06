---
outline: deep
---

# 通知メール設定

eギフト注文に関する通知メールの設定です。

::: warning
このページは仮原稿です。通知タイミングやテンプレート変数は今後整理します。
:::

## 通知メールの種類

e-Gift Nowでは、以下のような通知メールを扱います。

- 購入者向けのギフトURL通知
- 受取人向けの案内通知
- ストア担当者向けの注文通知

## テンプレートを編集する

アプリ管理画面から通知メールのテンプレートを編集します。

件名、本文、差し込み変数などを確認し、ストアの運用に合わせて調整します。

## Shopifyスタッフ通知に追記する

Shopifyのスタッフ通知に、eギフト注文であることを表示したい場合は、通知テンプレートにLiquidコードを追加します。

~~~liquid
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
~~~

::: info
- Shopify管理画面で「設定」→「通知」→「スタッフへの通知」→「新規注文」を開く
- 上のコードスニペットをメール本文に追加する
:::

