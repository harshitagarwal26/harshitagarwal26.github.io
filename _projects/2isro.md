---
name: Fraud Detection in E-commerce using Machine Learning
tools: [ML, Python]
image: /assets/img/fraud0.png
description: E-commerce businesses are increasingly facing growing risks from various fraudulent activities. These issues not only escalate operational costs but also threaten consumer trust, making it essential for businesses to implement robust fraud prevention measures. I Developed a Machine Learning model to identify fraudulent activities on e-commerce platforms, enabling timely intervention against fraudulent users.
---

# Fraud Detection in E-commerce using Machine Learning
##### Supervisor: <a href = "https://scholar.google.com/citations?user=NMTJ718AAAAJ&hl=en"> Dr. Neeraj Agarwal</a>

<br>

E-commerce businesses face a range of fraudulent activities that can severely impact their operations. One common issue is *return-to-origin* fraud, where customers exploit return policies by falsely claiming returns or returning damaged goods for a refund. *Chargeback fraud* occurs when a buyer disputes a legitimate transaction, often claiming they never received the item, leading to a refund while they keep the product. *Account takeover* is another major concern, where hackers gain access to customer accounts to make unauthorized purchases. Lastly, *promo code* abuse involves the misuse of promotional discounts, either by reusing codes beyond their intended use or sharing them widely, resulting in financial loss for the business. These types of fraud pose significant challenges, increasing operational costs and impacting consumer trust.

<br>

{% include elements/figure.html image="/assets/img/fraud.png" caption="Photo by NASA on Unsplash" %}

<!-- ![preview](/assets/img/fraud0.png) -->

<br>

### Implementation Details

Data preprocessing

* For this project, we started with an open source Fraud accounts dataset available on Kaggle.

* Next, conducted feature engineering to create meaningful features, such as *buy_time* which quantifies the time difference between when a user signs up for an e-commerce platform and when they make their first purchase, thereby improving fraud detection. For instance, accounts with a *buy_time* of just a few minutes may indicate fraudulent activity. We also plotted correlation matrix to confirm this behaviour. Negative correlation was found with *buy_time* and chances of being fraud.

* Analyzed the dataset and identified an imbalance, with a scarcity of fraudulent users, and applied SMOTE (Synthetic Minority Over-sampling Technique) to effectively address the issue of dataset imbalance.

* 3 new variation of dataset we created namely: SMOTE, Borderline SMOTE, PCA. These variations of the dataset were used in combinations with different   models to achieve better results.

Modelling
* Started with Logistic Regression, then implemented Extra Tree Classifier to improve the results. 

<!-- {% include elements/figure.html image="/assets/img/isro2.jpeg" caption="Results" %} -->

<!-- ![preview](/assets/img/isro2.jpeg) -->


Challenges 
* One of the primary challenges encountered was the trade-off between increasing recall and inadvertently raising the false positive rate, resulting in the misclassification of many legitimate transactions as fraudulent.

<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>Library: scikit-learn</li>
<li>Method: Extra Trees Classifier</li>
</ul>

### Results
Evaluated model performance using the AUC of the ROC curve, achieving a recall of 92% and a precision of 96%.


<p class="text-center">
{% include elements/button.html link="https://github.com/harshitagarwal26/E-commerce_fraud/blob/main/Ecommerce_fraud.ipynb?short_path=88026b7" text="View Code" %}      
</p>
<p class="text-center">
{% include elements/button.html link="https://docs.google.com/presentation/d/1WjXS26SAQyXHL7AQ-4fc_d-1GfkESrU3nvx0Hhfvydg/present?slide=id.g30a7c5500cf_2_71" text="View Presentation" %}      
</p>
<!-- <p class="text-center">
{% include elements/button.html link="https://drive.google.com/file/d/1IAE-T9W7qWpdHEKeVr-rZRE2RLLZ3Lm8/view?usp=sharing" text="View Report" %}
</p> -->
