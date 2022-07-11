import FAQ from '../mdx/faq.mdx';

export default function Question(props) {
  return (
    <>
      <FAQ />
      <div class="mb-2">
        <a class="btn btn-primary" href="https://saveyourprimos.tumblr.com/ask">
          Ask A Question
        </a>
      </div>
      <div>
        <a
          class="btn btn-primary"
          href="https://saveyourprimos.tumblr.com/submit"
        >
          Submit Media
        </a>
      </div>
    </>
  );
}
