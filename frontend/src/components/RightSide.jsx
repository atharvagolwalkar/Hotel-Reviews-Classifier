export default function RightSide({ rightside }) {
    return (
      <div className="p-5 bg-[#C1D8C3]">
        {rightside === 'advanced' && (
          <div>
            <div className="metrics-container bg-white rounded-lg shadow-md p-4 m-4">
      <h2 className="text-2xl font-bold mb-2 text-green-600">Advanced Metrics</h2>
      <h3 className="text-lg font-semibold mb-1">Accuracy: <span className="text-green-600">92.05%</span></h3>
      <p className="mb-4 leading-relaxed">
        Synonym Replacement Improves model generalization by substituting words with synonyms, expanding vocabulary while preserving context.
        <br />
        Text Cleaning (lowercase, remove URLs, emails) Standardizes input by converting to lowercase and removing noise like URLs and emails, improving feature quality.
        <br />
        Word Tokenization Breaks text into individual words or tokens, preparing it for further analysis and feature extraction.
        <br />
        Lemmatization Reduces words to their base form, consolidating different inflections and potentially improving feature relevance.
        <br />
        Stopword Removal Eliminates common, low-information words to reduce noise and focus on more meaningful content.
        <br />
        Bag-of-Words (BoW) Transformer Converts text into numerical vectors based on word frequencies, disregarding grammar and word order.
        <br />
        N-grams Vectorization Extends BoW by considering sequences of N consecutive words, capturing some local context and phrases.
        <br />
        TF-IDF on BoW and N-grams Adjusts word importance based on frequency in the document and rarity across the corpus, balancing local and global relevance.
        <br />
        Feature Combination Merges different feature representations (BoW, N-grams, TF-IDF) for a richer set of text characteristics.
        <br />
        Data Split Divides data into training, validation, and test sets for unbiased model development and evaluation.
        <br />
        Hyperparameter Tuning on Multinomial Naive Bayes Optimizes model performance by systematically exploring and evaluating different parameter combinations.
        <br />
        Hyperparameter Tuning on Complement Naive Bayes Similar to Multinomial NB tuning, but focuses on a variant that often performs better on imbalanced datasets.
        <br />
        Voting Classifier Combines predictions from multiple models (Multinomial and Complement NB) to potentially improve overall accuracy and robustness.
      </p>
    </div>
    </div>
        )}
        {rightside === 'bernoulli' && (
          <div>
            <div className="metrics-container bg-white rounded-lg shadow-md p-4 m-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Bernoulli Naive Bayes</h2>
        <h3 className="text-lg font-semibold mb-1">Accuracy: <span className="text-green-600">68.1%</span></h3>
        <p className="mb-4">
          Bernoulli Naive Bayes is a probabilistic classifier based on Bayes' Theorem that is particularly effective for binary/boolean features, such as the presence or absence of a word in a document.
        </p>
        <h3 className="text-xl font-bold mb-2 text-blue-500">Key Concepts</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Bayes' Theorem:</strong> Helps update the probability of a class based on new evidence, allowing for informed predictions.
          </li>
          <li>
            <strong>Bernoulli Distribution:</strong> Assumes that each feature is a binary indicator (0 or 1), representing the absence or presence of a feature.
          </li>
          <li>
            <strong>Naive Assumption:</strong> Assumes features are independent of each other given the class label, simplifying calculations.
          </li>
        </ul>
        <h3 className="text-xl font-bold mb-2 text-blue-500">How It Works</h3>
        <h4 className="text-lg font-semibold mb-1">Training Phase:</h4>
        <p className="mb-4">
          The model calculates the probability of each class based on the training data, specifically focusing on the occurrence of features. It learns the probabilities of features being present or absent for each class.
        </p>
        <h4 className="text-lg font-semibold mb-1">Prediction Phase:</h4>
        <p className="mb-4">
          When a new instance is presented, the model computes the probabilities of that instance belonging to each class based on the learned feature probabilities. It classifies the instance into the class with the highest probability.
        </p>
      </div>
  
          </div>
        )}
        {rightside === 'complement' && (
          <div className="metrics-container bg-white rounded-lg shadow-md p-4 m-4">
          <h2 className="text-2xl font-bold mb-2 text-green-600">Complement Naive Bayes</h2>
          <h3 className="text-lg font-semibold mb-1">Accuracy: <span className="text-green-600">88.11%</span></h3>
          <p className="mb-4 leading-relaxed">
            Complement Naive Bayes is a variant of Naive Bayes designed to improve classification performance on imbalanced datasets. It modifies the training process to account for the distribution of the complement class.
            <br /><br />
            <strong>Key Concepts</strong>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Bayes' Theorem:</strong> Utilizes Bayes' Theorem to update the probability of a class based on new evidence.</li>
              <li><strong>Complement Class:</strong> Focuses on the complement of each class to learn more about the features that differentiate classes, particularly useful in cases of class imbalance.</li>
              <li><strong>Naive Assumption:</strong> Still assumes feature independence given the class label.</li>
            </ul>
            <strong>How It Works</strong>
            <br />
            <strong>Training Phase:</strong>
            <ul className="list-disc pl-5 mb-4">
              <li>The model calculates the probabilities of the features for both the target class and its complement class.</li>
              <li>It learns how features are distributed, considering both classes to improve predictions.</li>
            </ul>
            <strong>Prediction Phase:</strong>
            <ul className="list-disc pl-5 mb-4">
              <li>For a new instance, the model evaluates probabilities based on both the class and its complement.</li>
              <li>It classifies the instance into the class with the highest adjusted probability, improving performance in imbalanced scenarios.</li>
            </ul>
          </p>
        </div>
        )}
        {rightside === 'gaussian' && (
           <div className="metrics-container bg-white rounded-lg shadow-md p-4 m-4">
           <h2 className="text-2xl font-bold mb-2 text-green-600">Gaussian Naive Bayes</h2>
           <h3 className="text-lg font-semibold mb-1">Accuracy: <span className="text-green-600">72.36%</span></h3>
           <p className="mb-4 leading-relaxed">
             Gaussian Naive Bayes is a probabilistic classifier based on Bayes' Theorem, which is particularly useful for classification tasks involving continuous data that follows a Gaussian (normal) distribution.
             <br /><br />
             <strong>Key Concepts</strong>
             <ul className="list-disc pl-5 mb-4">
               <li><strong>Bayes' Theorem:</strong> This principle helps update the probability of a class based on new evidence. It allows us to make informed predictions based on prior knowledge and current data.</li>
               <li><strong>Naive Assumption:</strong> The method assumes that the features (attributes) used for classification are independent of each other, given the class label. This simplification makes calculations easier and faster.</li>
               <li><strong>Gaussian Distribution:</strong> For continuous features, Gaussian Naive Bayes assumes that these features follow a normal distribution, which is common in many real-world scenarios.</li>
             </ul>
             <strong>How It Works</strong>
             <br />
             <strong>Training Phase:</strong>
             <ul className="list-disc pl-5 mb-4">
               <li>The model learns by calculating the probability of each class (category) based on the training data.</li>
               <li>It also computes the average and variance for each feature within each class, helping it understand how those features behave.</li>
             </ul>
             <strong>Prediction Phase:</strong>
             <ul className="list-disc pl-5 mb-4">
               <li>When a new instance (data point) is presented, the model evaluates the probabilities of that instance belonging to each class based on the learned characteristics.</li>
               <li>It then classifies the instance into the class with the highest probability.</li>
             </ul>
             <strong>Confusion Matrix:</strong>
             <p className="leading-relaxed">
               The confusion matrix provides insight into the performance of the classifier by showing the true positive, true negative, false positive, and false negative predictions, helping to evaluate the effectiveness of the model.
             </p>
           </p>
         </div>
        )}
        {rightside === 'multinomial' && (
          <div className="metrics-container bg-white rounded-lg shadow-md p-4 m-4">
          <h2 className="text-2xl font-bold mb-2 text-green-600">Multinomial Naive Bayes</h2>
          <h3 className="text-lg font-semibold mb-1">Accuracy: <span className="text-green-600">88.94%</span></h3>
          <p className="mb-4 leading-relaxed">
            Multinomial Naive Bayes is a probabilistic classifier based on Bayes' Theorem that is particularly suited for discrete features, especially in text classification tasks involving word counts or frequencies.
            <br /><br />
            <strong>Key Concepts</strong>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Bayes' Theorem:</strong> Updates the probability of a class based on new evidence, helping make informed predictions.</li>
              <li><strong>Multinomial Distribution:</strong> Assumes that features represent the counts or frequencies of events, such as the occurrence of words in a document.</li>
              <li><strong>Naive Assumption:</strong> Assumes that features are independent of each other given the class label, which simplifies the calculations.</li>
            </ul>
            <strong>How It Works</strong>
            <br />
            <strong>Training Phase:</strong>
            <ul className="list-disc pl-5 mb-4">
              <li>The model learns by calculating the probability of each class and the frequency of features (like word counts) in the training data.</li>
              <li>It computes the probabilities of features given each class based on these frequencies.</li>
            </ul>
            <strong>Prediction Phase:</strong>
            <ul className="list-disc pl-5 mb-4">
              <li>When a new instance is presented, the model evaluates the probabilities of that instance belonging to each class based on the learned frequency distributions.</li>
              <li>It classifies the instance into the class with the highest probability.</li>
            </ul>
          </p>
        </div>
        )}
        {rightside && rightside !== 'advanced' && rightside !== 'bernoulli' && rightside !== 'complement' && rightside !== 'gaussian' && rightside !== 'multinomial' && (
          <div>
            <h2>No Data Available</h2>
            <p>Please select a valid option to view data.</p>
          </div>
        )}
      </div>
    );
  }
  