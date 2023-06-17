import a1 from '../../assets/a1.jpg'
const About = () => {
    return (
        <div id='about'>
            <div className='text-center my-6'>
                <h2 className='text-4xl font-bold text-center text-orange mt-12 mb-4'>About</h2>
                <p className='text-2xl font-semibold'>Know More About Us</p>
            </div>
            <div className='container mx-auto'>
                <div className='flex justify-between lg:flex-row flex-col gap-x-8'>
                    <div>
                        <p>
                            Welcome to Action Toys, your one-stop shop for action-packed adventure! Discover a wide range of action toys inspired by popular franchises like Avengers, DC Studio, and Transformers. Unleash your imagination with our collection of detailed figures, vehicles, and playsets. Dive into the Marvel universe, join forces with DC superheroes, or experience the epic battles of Transformers. Find your favorite characters and create unforgettable moments of fun and excitement. Shop now and let the action begin at Action Toys!
                        </p>
                        <br />
                        <p>
                            For fans of DC Studio, we offer a wide selection of action toys featuring legendary heroes such as Batman, Superman, Wonder Woman, and many more. Whether you're a collector or an avid fan, our meticulously crafted figures and accessories will satisfy your craving for justice and excitement.
                        </p>
                        <br />
                        <p>At Action Toys, we pride ourselves on curating high-quality products that ignite imagination and provide endless hours of fun. With detailed images and descriptions, you can make informed choices and find the perfect action toy to complete your collection or surprise a fellow enthusiast.</p>
                        <br />
                        <p>Unleash your inner hero, embrace the thrill of adventure, and bring your favorite characters to life with Action Toys. Shop now and embark on an unforgettable journey into the world of action-packed excitement!</p>
                    </div>
                    <img src={a1} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;