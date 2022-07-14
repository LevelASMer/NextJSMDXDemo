import FAQ from '../mdx/faq.mdx';

export default function Question(props) {
  return (
    <>
      <FAQ />
      <div className="mb-2">
        <a
          className="btn btn-primary"
          href="https://saveyourprimos.tumblr.com/ask"
        >
          Ask A Question
        </a>
      </div>
      <div>
        <a
          className="btn btn-primary"
          href="https://saveyourprimos.tumblr.com/submit"
        >
          Submit Media
        </a>
      </div>
    </>
  );
}
