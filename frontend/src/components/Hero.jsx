import { useState } from 'react';
import CustomNavbar from "./CustomNavbar";

function Hero({setright}) {
  const [reviewText, setReviewText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [bernoulli, setBernoulli] = useState(null)
  const [complement, setComplement] = useState(null)
  const [gaussian, setGaussian] = useState(null)
  const [multinomial, setmultinomial] = useState(null)
  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: reviewText }),  
      });

      const data = await response.json();
      setPrediction(data.prediction);
      setBernoulli(data.bernoulli)
      setComplement(data.complement)
      setGaussian(data.gaussian)
      setmultinomial(data.multinomial)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='flex flex-col pt-5 items-center min-h-screen w-30% p-5 bg-[#C1D8C3]'>
        <label className='text-black text-2xl mb-4'>Review</label>
        <div>
          <input
            className='p-2 rounded-md mb-4'
            placeholder='Enter your review here'
            value={reviewText}
            onChange={handleInputChange}  
          />
          <button
            onClick={handleSubmit}  
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            Analyze Sentiment
          </button>
        </div>
        {prediction && (
          <div className='mt-4'>
            <div onClick={() => setright('advanced')}>
          <h1 className='text-4xl'>Advanced</h1>
  <h2 className='text-xl text-black'>Predicted Sentiment: {prediction}</h2>
</div>
<div onClick={() => setright('bernoulli')}>
  <h1 className='text-4xl'>Bernoulli</h1>
  <h2 className='text-xl text-black'>Bernoulli Sentiment: {bernoulli}</h2>
</div>
<div onClick={() => setright('complement')}>
<h1 className='text-4xl'>Complement</h1>

<h2 className='text-xl text-black'>Complement Sentiment: {complement}</h2>
</div>
<div onClick={() => setright('gaussian')}>
<h1 className='text-4xl'>Gaussian</h1>

<h2 className='text-xl text-black'>Gaussian Sentiment: {gaussian}</h2>

</div>
<div onClick={() => setright('multinomial')}>
<h1 className='text-4xl'>Multinomial</h1>

<h2 className='text-xl text-black'>Multinomial Sentiment: {multinomial}</h2>

</div>

            
           
           
            
            

        
       
            {/* <img src='../src/assets/accuracy_bar_graph.jpg'/> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
