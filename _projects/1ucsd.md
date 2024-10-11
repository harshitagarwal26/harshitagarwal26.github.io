---
name: Graph Neural Network for the XENON Detector
tools: [Graph Neural Network, Regression, Spektral]
image: /assets/img/xenon.jpg
description: I designed a graph neural network to reconstruct the position of collisions happening in the XENON detector, an underground experiment for studying potential dark matter candidates.
---

# Graph Neural Network for the XENON Detector
##### Supervisor: <a href = "https://physics.ucsd.edu/Directory/Person/482"> Dr. Kaixuan Ni </a>

<br>
Fascinated by dark matter? Well, aren't we all? And I am thrilled that I got the opportunity to directly contribute to its research!

Located in Italy, the <a href="https://science.purdue.edu/xenon1t/">XENON Experiment</a> was established to study potential dark matter candidates. Broadly, it is just a cylinder full of liquid Xenon with vacuum tubes (to detect photons) aligned in a hexagonal arrangement at the top and the bottom faces.

{% include elements/figure.html image="/assets/img/ucsd.jpg" caption="The XENON Detector" %}
<!-- ![preview](/assets/img/ucsd.jpg) -->

In fact, this hexagonal arrangement piqued the community’s interest to experiment with graph neural networks. After all, what better than graphs could capture a hexagonal shape!

I designed a graph neural network to reconstruct the position of the collision happening in the detector. And my neural network performed better than the original software used by XENON to reconstruct the position!

<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>Library: <a href="https://github.com/danielegrattarola/spektral">Skeptral</a></li>
<li>API: Keras and Tensorflow</li>
<li>Model Architecture:
<ul><li>Layers : Graph Convolutional Layers</li>
<li>Optimiser: Adam</li>
<li>Activation Function: ReLu </li>
<li>Loss Function: Mean Squared Error</li></ul> </li>
<li>Dataset Size:
<ul><li>Train: 80000 events </li>
<li>Test: 20000 events (approximately) </li> </ul></li>
</ul>

<br>

### Results
The Graph Neural Network (with 200k trainable parameters) obtained an RMSE of 1.936 cm. It outperformed a Convolutional Neural Network (with 5 million trainable parameters) by 12%, and the original software used for positon reconstruction by XENON (<a href= "https://github.com/XENONnT/straxen"><i>straxen</i></a>) by 67%.

<!-- ## Search Movies

![search](https://www.sketchappsources.com/resources/source-image/microsoft-windows-10-virtual-keyboard-diogo-sousa.png) -->

<p class="text-center">
{% include elements/button.html link="https://docs.google.com/presentation/d/1GxSzdwGt5Zl98TtHSi_1zIr8pTvJ7l0HLCpeG3pLFU4/present?slide=id.g35f391192_00" text="View Presentation" %}
</p>

<p class="text-center">
{% include elements/button.html link="https://docs.google.com/presentation/d/1WjXS26SAQyXHL7AQ-4fc_d-1GfkESrU3nvx0Hhfvydg/present?slide=id.g30a7c5500cf_2_71" text="View Presentation" %}      
</p>
