import './main.css';
export default function Home() {
    return (
        <div className = "App-body">
            <h1>Welcome</h1>
            <iframe src="https://giphy.com/embed/uj8338sYwMexDTt4xI" width="50" height="50" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p>
                    Welcome to my website. My name is Sergio and this is my first website i've built on my own.
                    I created this site as a simple project to get comfortible with react, HTML, and CSS. I hope
                    to incorporate Javascript and a database into this site at some point in time. My goal for this
                    site is to use it as a place to hold information about me which could be found on a resume. Even though
                    this is my goal, if it does not come to fruition it is ok. This is ultimitely practice for me and hopefully
                    something to help me grow at a programmer. Thank you for visting and feel free to take a look around.
            </p>             
        </div>
    );
  }