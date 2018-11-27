import React from 'react';
import '../css/home.css'; //Import compiled SCSS file
import render from '../images/render.png';
import model from '../images/model.png';
import consult from '../images/consult.png';
import nick from '../images/nick.jpg';


const Home = () => {

return (
	<div className = 'home'>

		<h1>Welcome to WalTech Visualization</h1>
		<div className = 'profile'>
			<div className = 'intro'>
				<p>
					WalTech Visualization was founded in 2014 by Nicholas Bell and is committed to providing great service and beautiful renderings to designers all over Canada.
				</p>
				<p>
					WalTech Visualization was created by a design professional for design professionals. Nicholas Bell brings nearly a decade of 3D modeling and visualization skills, a Master’s degree in Architecture, as well as real world experience in an architecture firm to your project.  WalTech Visualization will provide you with the experienced, professional services you need.
				</p>
			</div>
			<div className = 'picture'>
				<img src = {nick} alt = 'Nicholas Bell' />
				<p>
					Nicholas Bell - Owner
				</p>
			</div>
		</div>
		

		<div className = 'services'>
		<h1>What Can WalTech Do for You?</h1>
			<div className = 'serviceCard'>
				<h2>Renderings</h2>
				<img src = {render} alt = 'renderings' />
				<p className = 'serviceText'>
					Beautiful, custom-made 3D renderings and animations for your projects will  wow your clients and sell your ideas. Whether you need static images, interactive models, or animations, WalTech can help you achieve your goals and impress your clients.
				</p>
			</div>

			<div className = 'serviceCard'>
				<h2>Models</h2>
				<img src = {model} alt = 'Models' />
				<p className = 'serviceText'>
				3D services aren’t just about renderings. A 3D model can allow for experimentation and exploration of your ideas. WalTech can create an organized model with impeccable meshes, texturing, and layer management built right in so that you can easily navigate, build, and iterate on your designs.
				</p>
			</div>

			<div className = 'serviceCardBottom'>
				<h2>Consultation</h2>
				<img src = {consult} alt = 'Consultation' />
				<p className = 'serviceText'>
					No matter where you are in your process, WalTech can support your project. WalTech will work to determine your needs, your budget, and the process that will work for you. With WalTech, you have access to a 3D specialist whenever you need it.			
				</p>
			</div>
		</div>

		<div className = 'process'>
			<h1>How Does it Work?</h1>
			<div className = 'row'>
				<div className = 'step'>
					<p>Step 1</p>
					<h2>Information</h2>
				</div>
				<div className = 'description'>
					<p>
						After contacting WalTech Visualization, the first step is to determine the scope of your project. This includes learning as much as possible about your project including what final deliverables are required. Any information you provide will be kept confidential. The information you will be asked to provide will include things like:
					</p>
					<div className = 'list'>
						<p>Plans</p>
						<p>Elevations</p>
						<p>Site Plans</p>
					</div>
					<div className = 'list'>
						<p>Finishes/Materials</p>
						<p>Existing/Site Photos</p>
						<p>Working 3D Models</p>
					</div>
					<p>
						Any information you can provide can be useful, so please send whatever you have. 
					</p>
				</div>
			</div>

			<div className = 'row'>
				<div className = 'step'>
					<p>Step 2</p>
					<h2>Estimate and Contract</h2>
				</div>
				<div className = 'description'>
					<p>
						After reviewing the information shared and discussing your needs, WalTech will provide an estimated price, timeline and contract for review and signature. The price estimate will not change unless there is a change to the contract, which must be agreed upon by both parties.  There is no obligation or cost incurred until the contract is signed. If you do not decide to go with WalTech any information you shared will be deleted. 
					</p>
					<p>
						As soon as you sign the contract and send it back via email, the work can begin. 
					</p>

					
				</div>
			</div>

			<div className = 'row'>
				<div className = 'step'>
					<p>Step 3</p>
					<h2>Work Begins</h2>
				</div>
				<div className = 'description'>
					<p>
					What this process looks like will depend on the project and the way you want to engage in the work as determined in steps one and two. WalTech may share preliminary shots of the model for your input on framing the shot and/or material choices. If  collaborating on a model or animation, you may receive inquiries for clarification on design intent, as well as early versions of the working model for your review. 
					</p>
				</div>
			</div>

			<div className = 'row'>
				<div className = 'step'>
					<p>Step 4</p>
					<h2>Review and Finalize</h2>
				</div>
				<div className = 'description'>
					<p>
						When your project is nearly complete, you will be sent near final renderings, animations, or models to allow for any final tweaks or adjustments prior to the finished project. Once you have signed off and are happy with your deliverables, you will receive the project files via a cloud storage platform, as well as an invoice for the work completed.
					</p>
					<p>
					Then you're done!
					</p>
				</div>
			</div>
		</div>

		<h1>Who Uses WalTech?</h1>
		<div className = 'testimonial'>
			<div className = 'testimonialCard'>
				<h2>Architects</h2>
				<p className = 'testimonialText'>
					“Waltech is our go-to expert when we need high quality renderings on short notice.  As design professionals, we truly appreciate that Nicholas speaks our specialized language, which enables us to spend more time designing, and less time explaining our intentions. Based on several projects completed to date, Waltech strives to meet and exceed our expectations, and we frequently recommend Nicholas' services to other local design firms.”
				</p>
				<p className = 'attribution'>
					-Dustin Sharrow, MMP Architects
				</p>
			</div>

			<div className = 'testimonialInt'>
				<h2>Interior Designers</h2>
				<p className = 'testimonialText'>
					“Our firm has been working with Nicholas and WalTech Visualization for a few years now.  They have given us wonderful service and are very prompt with responses.  They are also creative in providing renderings for our interior design firm.  We would highly recommend them!"
				</p>
				<p className = 'attribution'>
					-Teresa Van Osch, Van Osch Design
				</p>
			</div>

			<div className = 'testimonialBottom'>
				<h2>Home Builders</h2>
				<p className = 'testimonialText'>
					“Ramar Construction was in search of a trustworthy company to provide exterior and interior renderings for their standard book of plans. When WalTech Visualization was contacted, they provided high quality renderings with a turn around time that exceeded our expectations.”	
				</p>
				<p className = 'attribution'>
					-Scott Sim, Ramar Homes
				</p>
			</div>

			
		</div>
	</div>
	);

}

export default Home;


