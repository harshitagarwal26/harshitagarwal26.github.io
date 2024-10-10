---
name: Automatic Realtime Machine Translation
tools: [GRU, Natural Language Processing, Tensorflow]
image: /assets/img/iitm.jpg
description: I designed a machine translation model capable of translating short sentences from five languages (Chinese, Persian, Sinhalese, Burmense and Indonesian) to English and vice versa.

---

# Automatic Realtime Machine Translation

On the battlefield, a lot of communication happens through radio channels. Though armies have the technology to intercept enemy radio channels, it is tough to detect and translate the voices in real-time if it is in another language. For this cause, my friends and I developed a language-agnostic NLP model that translates an input sentence to a set of output languages to assist in easy comprehension. This project got us the runner-up position in the AI Track of the Defence Innovation Challenge, Shaastra Techfest, IIT Madras.

We implemented a Seq-to-Seq Model (Encoder-Decoder-Attention Mechanism) that could translate short sentences in Sinhalese, Persian, Chinese (simplified), and Indonesian to English and vice versa.

<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>API: Tensorflow</li>
<li>Model Architecture:
<ul><li>Encoder: Single Layer Gated Recurrent Unit (GRU)</li>
<li>Attention: <i>bahdanau</i> Style</li>
<li>Decoder: Single Layer GRU</li>
<li>Optimiser: Adam</li>
<li>Loss Function: Sparse Categorical Entropy</li></ul> </li>
<li> Word Embeddings:
<ul><li> Library: Fasttext </li>
<li> Dimension: 300 </li></ul></li>
</ul>

<br>

### Results

Here is a set of randomly chosen sentences:

```python
# English to Indonesian
translate('My friend is a good  person')
Input: <start> my friend is a good person <end>
Predicted translation: teman teman yang bagus

translate('Soldiers fought day and night.')
Input: <start> soldiers fought day and night <end>
Predicted translation: para prajurit hari dan malam
```

```python
# Persian to English
translate('او یک دختر است')
Input: <start> او یک دختر است <end>
Predicted translation: he s a daughter <end>

translate('او بعد از شام تحصیل می کند')
Input: <start> او بعد از شام تحصیل می کند <end>
Predicted translation: he studies after dinner <end>
```

```python
# Sinhalese to English
translate('කරුණාකර මට කෑගහන්න එපා')
Input: <start> කරුණාකර මට කෑග න්න එපා <end>
Predicted translation: please don t interrupt me <end>

translate('මත්ද්‍රව්‍ය හොඳටම බලනවා')
Input: <start> මත්ද්‍රව්‍ය ොඳටම බලනවා <end>
Predicted translation: don t be the prisoner <end>
```

```python
# Chinese to English
translate('他很棒')
Input: <start> 他 很棒 <end>
Predicted translation: he is wonderful <end>

translate('请让我唱歌')
Input: <start> 请 让 我 唱歌 <end>
Predicted translation: please let me go home <end>
```

<p class="text-center">
{% include elements/button.html link="https://github.com/team-anc/multilingual_translation-" text="View Code" %}      
</p>
