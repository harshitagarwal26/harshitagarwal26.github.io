---
name: Siamese Networks for One-shot Image Recognition
tools: [Tensorflow, Python]
image: /assets/img/snn0.png
description: Developed and implemented deep learning models to address the one-shot image recognition problem using the omniglot dataset.
---
# Siamese Networks for One-Shot Image Recognition
##### Supervisor: <a href = "https://universe.bits-pilani.ac.in/pilani/surekha/Profile"> Dr. Surekha Bhanot</a>

<br>
One-shot image recognition can be useful for signature verification, enabling accurate authentication by comparing a new signature to just a single reference signature on file. To facilitate this, we propose a deep learning based
one-shot image recognition model trained on Omniglot dataset.

<br>
{% include elements/figure.html image="/assets/img/snn.png" caption="Overall architecture of Siamese Neural Networks" %}

<br>

### Implementation Details

Data Pre-processing
<ul>
  <li>Firstly, we loaded the images by first looping over all the languages and fetching all the images for each alphabet in every language one by one. This was done for both test and validation sets.</li>
  <li>Then we randomly selected languages for each batch and in every language, formed pairs of images with target of 1 if they belong to the same alphabet and 0 if they are of different alphabets.</li>
</ul>
Architecture and Training
<ul>
  <li>The two input images (x1 and x2) are passed through a ConvNet to generate a fixed length feature vector for each (h(x1) and h(x2)).</li>
  <li>The L1 distance between the feature vectors is then used to compute a similarity score which  determines the final class.</li>
  <li>We used Adam Optimizer with a learning rate of 0.00009 exponentially decaying at a rate of 0.99 and binary cross-entropy loss.</li> 
  <li>The model was trained for 2000 epochs with a batch size of 32.</li>
</ul>

Validation and Testing
<ul>
  <li>N-way One-shot Learning has been used to validate and test the data.</li> 
  <li>For each alphabet, a test image and a support set is generated randomly from the validation set. The test image is then compared to each of the images in the  support set and the pair with the maximum similarity is used to determine the accuracy.</li> 
  <li>If the image with the maximum similarity is the correct one, we consider it as correct and increase the number of correctly classified examples.</li> 
</ul>
<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>One-shot Learning </li>
<li>BERT for Language Modeling</li>
<li>Framework: Tensorflow</li>
<li>Model: Siamese Neural Network</li>
</ul>

<br>

### Results
Initially achieved ~80% accuracy, but through experimentation with different activation functions, optimizer decay rate, learning rate, improved model performance to reach 90.4% accuracy.

<br>

<p class="text-center">
{% include elements/button.html link="https://github.com/harshitagarwal26/BITSF312_NNFL/blob/main/Project/Final_NNFL_Project.ipynb" text="View Code" %}      
</p>
<p class="text-center">
{% include elements/button.html link="https://docs.google.com/presentation/d/1b94iNpD5U46_cimriA6UBgBfIS2MFAO49UFpo8M0-0o/present?slide=id.g30a508aa66a_1_71" text="View Presentation" %}      
</p>
<!-- 
<p class="text-center">
{% include elements/button.html link="https://ieeexplore.ieee.org/document/9671446" text="View Paper" %}
</p> -->
