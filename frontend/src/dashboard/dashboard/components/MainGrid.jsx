import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import ChartUserByCountry from "./ChartUserByCountry";
import CustomizedTreeView from "./CustomizedTreeView";
import CustomizedDataGrid from "./CustomizedDataGrid";
import HighlightedCard from "./HighlightedCard";
import MenuButton from "./MenuButton";
import PageViewsBarChart from "./PageViewsBarChart";
import SessionsChart from "./SessionsChart";
import StatCard from "./StatCard";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import gaussianimage from "../../../assets/gaussian.jpg";
import complementimage from "../../../assets/complement.jpg";
import multinomialimage from "../../../assets/multinomial.jpg";
import bernoulliimage from "../../../assets/bernoulli.jpg";
import advancedimage from "../../../assets/advanced.jpg";
import Input from "./Input";
import Card from "@mui/material/Card";

const data = [
  {
    title: "Gaussian Naive Bayes",
    accuracy: "0.7236",
    description: `
Gaussian Naive Bayes is a probabilistic classifier based on Bayes' Theorem, which is particularly useful for classification tasks involving continuous data that follows a Gaussian (normal) distribution.

Key Concepts
Bayes' Theorem: This principle helps update the probability of a class based on new evidence. It allows us to make informed predictions based on prior knowledge and current data.

Naive Assumption: The method assumes that the features (attributes) used for classification are independent of each other, given the class label. This simplification makes calculations easier and faster.

Gaussian Distribution: For continuous features, Gaussian Naive Bayes assumes that these features follow a normal distribution, which is common in many real-world scenarios.

How It Works

#Training Phase:
The model learns by calculating the probability of each class (category) based on the training data.
It also computes the average and variance for each feature within each class, helping it understand how those features behave.

#Prediction Phase:
When a new instance (data point) is presented, the model evaluates the probabilities of that instance belonging to each class based on the learned characteristics.
It then classifies the instance into the class with the highest probability.
`,
    image: gaussianimage,
  },
  {
    title: "Complement Naive Bayes",
    accuracy: "0.8811",
    description: `Complement Naive Bayes is a variant of Naive Bayes designed to improve classification performance on imbalanced datasets. It modifies the training process to account for the distribution of the complement class.

   Key Concepts
   Bayes' Theorem: Utilizes Bayes' Theorem to update the probability of a class based on new evidence.

Complement Class: Focuses on the complement of each class to learn more about the features that differentiate classes, particularly useful in cases of class imbalance.

Naive Assumption: Still assumes feature independence given the class label.

How It Works

#Training Phase:
The model calculates the probabilities of the features for both the target class and its complement class.
It learns how features are distributed, considering both classes to improve predictions.

#Prediction Phase:
For a new instance, the model evaluates probabilities based on both the class and its complement.
It classifies the instance into the class with the highest adjusted probability, improving performance in imbalanced scenarios.
`,
    image: complementimage,
  },
  {
    title: "Bernoulli Naive Bayes",
    accuracy: "0.6810",
    description: `Bernoulli Naive Bayes is a probabilistic classifier based on Bayes' Theorem that is particularly effective for binary/boolean features, such as the presence or absence of a word in a document.

Key Concepts
Bayes' Theorem: Helps update the probability of a class based on new evidence, allowing for informed predictions.

Bernoulli Distribution: Assumes that each feature is a binary indicator (0 or 1), representing the absence or presence of a feature.

Naive Assumption: Assumes features are independent of each other given the class label, simplifying calculations.

How It Works

#Training Phase:
The model calculates the probability of each class based on the training data, specifically focusing on the occurrence of features.
It learns the probabilities of features being present or absent for each class.

#Prediction Phase:
When a new instance is presented, the model computes the probabilities of that instance belonging to each class based on the learned feature probabilities.
It classifies the instance into the class with the highest probability.
`,
    image: bernoulliimage,
  },
  {
    title: "Multinomial Naive Bayes",
    accuracy: "0.8894",
    description: `Multinomial Naive Bayes is a probabilistic classifier based on Bayes' Theorem that is particularly suited for discrete features, especially in text classification tasks involving word counts or frequencies.

   Key Concepts
Bayes' Theorem: Updates the probability of a class based on new evidence, helping make informed predictions.

Multinomial Distribution: Assumes that features represent the counts or frequencies of events, such as the occurrence of words in a document.

Naive Assumption: Assumes that features are independent of each other given the class label, which simplifies the calculations.

How It Works

#Training Phase:
The model learns by calculating the probability of each class and the frequency of features (like word counts) in the training data.
It computes the probabilities of features given each class based on these frequencies.

#Prediction Phase:
When a new instance is presented, the model evaluates the probabilities of that instance belonging to each class based on the learned frequency distributions.
It classifies the instance into the class with the highest probability.`,
    image: multinomialimage,
  },
  {
    title: "Advanced Multinomial Naive Bayes",
    accuracy: "0.9217",
    description: `Synonym Replacement Improves model generalization by substituting words with synonyms, expanding vocabulary while preserving context.

Text Cleaning (lowercase, remove URLs, emails) Standardizes input by converting to lowercase and removing noise like URLs and emails, improving feature quality.

Word Tokenization Breaks text into individual words or tokens, preparing it for further analysis and feature extraction.

Lemmatization Reduces words to their base form, consolidating different inflections and potentially improving feature relevance.

Stopword Removal Eliminates common, low-information words to reduce noise and focus on more meaningful content.

Bag-of-Words (BoW) Transformer Converts text into numerical vectors based on word frequencies, disregarding grammar and word order.

N-grams Vectorization Extends BoW by considering sequences of N consecutive words, capturing some local context and phrases.

TF-IDF on BoW and N-grams Adjusts word importance based on frequency in the document and rarity across the corpus, balancing local and global relevance.

Feature Combination Merges different feature representations (BoW, N-grams, TF-IDF) for a richer set of text characteristics.

Data Split Divides data into training, validation, and test sets for unbiased model development and evaluation.

Hyperparameter Tuning on Multinomial Naive Bayes Optimizes model performance by systematically exploring and evaluating different parameter combinations.

Hyperparameter Tuning on Complement Naive Bayes Similar to Multinomial NB tuning, but focuses on a variant that often performs better on imbalanced datasets.

Voting Classifier Combines predictions from multiple models (Multinomial and Complement NB) to potentially improve overall accuracy and robustness.`,
    image: advancedimage,
  },
];

export default function MainGrid() {
  const [main, setMain] = React.useState("overview");

  return (
    <>
      <Header setMain={setMain} />
      {main === "overview" ? <Overview /> : <Playground />}
    </>
  );
}

function PopupView({ popup, open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{popup?.title || "No Title Available"}</DialogTitle>
      <DialogContent dividers>
        <img src={popup?.image || ""} alt="Model Image" />
        <Typography component="div" variant="body1">
          {popup?.description
            ? popup.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : "No Description Available"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function Header({ setMain }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: (theme) => theme.spacing(2),
        width: "100%",
        maxWidth: { sm: "100%", md: "1700px" },
      }}
    >
      <MenuButton
        sx={{
          width: "100%",
          maxWidth: { sm: "100%", md: "1700px" },
          padding: (theme) => theme.spacing(2),
        }}
        onClick={() => setMain("overview")}
      >
        Overview
      </MenuButton>
      <MenuButton
        sx={{
          width: "100%",
          maxWidth: { sm: "100%", md: "1700px" },
          padding: (theme) => theme.spacing(2),
        }}
        onClick={() => setMain("playground")}
      >
        Playground
      </MenuButton>
    </Grid>
  );
}

function Overview() {
  const [popup, setPopup] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (card) => {
    setPopup(card); // set the entire card object, not just the title
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Overview
        </Typography>
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {data.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
              <StatCard {...card} setOpen={setOpen} setPopup={setPopup} />
            </Grid>
          ))}
          <PopupView popup={popup} open={open} handleClose={handleClose} />
        </Grid>
        <Grid
          container
          spacing={2}
          columns={2}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          <Grid size={{ xs: 2, lg: 1 }}>
            <SessionsChart />
          </Grid>
          <Grid size={{ xs: 2, lg: 1 }}>
            <PageViewsBarChart />
          </Grid>
        </Grid>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Details
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <CustomizedDataGrid />
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Stack
              gap={2}
              direction={{ xs: "column", sm: "row", lg: "column" }}
            >
              {/* <CustomizedTreeView /> */}
              <ChartUserByCountry />
            </Stack>
          </Grid>
        </Grid>
        <Copyright sx={{ my: 4 }} />
      </Box>
    </>
  );
}

function Playground() {
  const [input, setInput] = React.useState("");
  const [prediction, setPrediction] = React.useState(null);
  const [bernoulli, setBernoulli] = React.useState(null);
  const [complement, setComplement] = React.useState(null);
  const [gaussian, setGaussian] = React.useState(null);
  const [multinomial, setMultinomial] = React.useState(null);
  const classLabels = ["Negative", "Neutral", "Positive"];

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      console.log(data); // For debugging

      setPrediction({
        prediction: data.prediction,
        confidence: data.confidence,
      });
      setBernoulli({
        prediction: data.bernoulli,
        confidence: data.bernoulli_confidence,
      });
      setComplement({
        prediction: data.complement,
        confidence: data.complement_confidence,
      });
      setGaussian({
        prediction: data.gaussian,
        confidence: data.gaussian_confidence,
      });
      setMultinomial({
        prediction: data.multinomial,
        confidence: data.multinomial_confidence,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box>
      <Input setInput={setInput} />
      <div>
        <MenuButton
          sx={{
            width: "100%",
            maxWidth: { sm: "100%", md: "1700px" },
            padding: (theme) => theme.spacing(2),
            mt: 2,
          }}
          onClick={handleSubmit}
        >
          Get Results
        </MenuButton>
      </div>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Results:
        </Typography>
        <Grid container spacing={2}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <Typography variant="h6">
              Gaussian Naive Bayes:{" "}
              {gaussian ? gaussian.prediction : "Please enter an input"}
            </Typography>
            <Typography variant="h6">
              Confidence: <br />
            </Typography>
            <Typography>
              {gaussian && gaussian.confidence && gaussian.confidence[0]
                ? gaussian.confidence[0]
                    .map(
                      (score, index) =>
                        `${classLabels[index]}: ${(score * 100).toFixed(2)}%`
                    )
                    .join(", ")
                : ""}
            </Typography>
          </Card>

          <Card variant="outlined" sx={{ height: "100%" }}>
            <Typography variant="h6">
              Bernoulli Naive Bayes:{" "}
              {bernoulli ? bernoulli.prediction : "Please enter an input"}
            </Typography>
            <Typography variant="h6">
              Confidence: <br />
            </Typography>
            <Typography>
              {bernoulli && bernoulli.confidence && bernoulli.confidence[0]
                ? bernoulli.confidence[0]
                    .map(
                      (score, index) =>
                        `${classLabels[index]}: ${(score * 100).toFixed(2)}%`
                    )
                    .join(", ")
                : ""}
            </Typography>
          </Card>

          <Card variant="outlined" sx={{ height: "100%" }}>
            <Typography variant="h6">
              Complement Naive Bayes:{" "}
              {complement ? complement.prediction : "Please enter an input"}
            </Typography>
            <Typography variant="h6">
              Confidence: <br />
            </Typography>
            <Typography>
              {complement && complement.confidence && complement.confidence[0]
                ? complement.confidence[0]
                    .map(
                      (score, index) =>
                        `${classLabels[index]}: ${(score * 100).toFixed(2)}%`
                    )
                    .join(", ")
                : ""}
            </Typography>
          </Card>

          <Card variant="outlined" sx={{ height: "100%" }}>
            <Typography variant="h6">
              Multinomial Naive Bayes:{" "}
              {multinomial ? multinomial.prediction : "Please enter an input"}
            </Typography>
            <Typography variant="h6">
              Confidence: <br />
            </Typography>
            <Typography>
              {multinomial &&
              multinomial.confidence &&
              multinomial.confidence[0]
                ? multinomial.confidence[0]
                    .map(
                      (score, index) =>
                        `${classLabels[index]}: ${(score * 100).toFixed(2)}%`
                    )
                    .join(", ")
                : ""}
            </Typography>
          </Card>

          <Card variant="outlined" sx={{ height: "100%" }}>
            <Typography variant="h6">
              Advanced Model:{" "}
              {prediction ? prediction.prediction : "Please enter an input"}
            </Typography>
            <Typography variant="h6">
              Confidence: <br />
            </Typography>
            <Typography>
              {prediction && prediction.confidence && prediction.confidence[0]
                ? prediction.confidence[0]
                    .map(
                      (score, index) =>
                        `${classLabels[index]}: ${(score * 100).toFixed(2)}%`
                    )
                    .join(", ")
                : ""}
            </Typography>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
