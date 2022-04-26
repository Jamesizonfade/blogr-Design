import illustration from '../images/illustration-editor-desktop.svg'

function Features () {
    return (
        <div id='features'>
         <h3 className='features-heading'>Designed for the future</h3>
        <div className="features-container">
        <div className='features-content-box'>
        <div className='features-contents'>
        <h4>Introducing an extensible editor</h4>
        <p>
        Blogr features an exceedingly intuitive interface which 
        lets you focus on one thing: creating content. 
        The editor supports management of multiple blogs and 
        allows easy manipulation of embeds such as images, 
        videos, and Markdown. Extensibility with plugins and
        themes provide easy ways to add functionality or 
        change the looks of a blog.
        </p>
        </div>
        <div className='features-contents'>
        <h4>Robust content management</h4>
        <p>
        Flexible content management enables users to easily move through posts. 
        Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With 
        this functionality, you’re in full control.
        </p>
        </div>
        

        </div>
        <div className='features-image-box'>
        <img className='illustration-image' src={illustration} alt="illustration image" />
        </div>
        </div>
        </div>
    )
}

export default Features
