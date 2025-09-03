import { useEffect, useState } from "react";
import Headline from "../components/Headline"


// need to make a  initial animation for the webpage to show of the  headline and my name, with text loading in timeout 2s 4s and etc.

interface Quote {
  quote: string,
  author: string,
  category: string
}

const HomePage = () => {

  const urlApi = "https://api.api-ninjas.com/v1/quotes";

  const opts = {method: 'GET',
    headers: { 'X-Api-Key': 'KlVONoBhypaPN9LPOHvy5g==3T9nn9jiUP3yJ27q' }}

  const getQuotes = async (url: string | URL | Request,options: RequestInit | undefined) => {
  try{
    setLoading(true);
    const res = await fetch(url,options);
    const data = await res.json();
    return data[0];
  } catch(err){
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.log(err);
      return null;
  } finally {
    setLoading(false)
  }
  }

  const [loading,setLoading] = useState<boolean>(false);
  const [quote,setQuote] = useState<Quote | null>(null);
  const [error,setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadInitialQuote = async () => {
      const initialQuote = await getQuotes(urlApi,opts);
      if (initialQuote && !isCancelled) {
        setQuote(initialQuote)
      }
    }

    loadInitialQuote();

    return () => {
      isCancelled = true;
    }
  }, []);

  const handleClick = async () => {
    const newQuote = await getQuotes(urlApi,opts);

    if (newQuote) {
      setQuote(newQuote);
    }
  }

  return (
    <section className="page" id='home'>
        <Headline text={'Cestmir Pavlasek'} size={64}/>
        <button className="quote-btn" onClick={handleClick} disabled={loading}>{loading ? "Loading.." : "Get a daily quote."}</button>
        <div className="quote-box">
          {loading && (
            <p>Loading quote..</p>
          )}

          {error && (
            <p>{error}</p>
          )}

          {quote && !loading && (
            <div>
              <h1 style={{color: "grey"}}>{quote.category.toUpperCase()}</h1>
              <h2>{quote.author}</h2>
              <p>- {quote.quote}</p>
            </div>
          )}

        </div>
    </section>
  )
}

export default HomePage