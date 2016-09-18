var about = Vue.extend({
    data: function() {
        return {
            summary: "Hi. I'm a full stack developer. I care about code correctness, efficiency, testability, and maintainability. I have experience developing software for desktop (every major OS), web (full stack), and mobile (Android). In addition to open source contributions, I regularly write and refactor code for personal projects in  C++, C#, Ruby, and Java. I love building stuff."
        };
    },
    template: `
        <div class="row panel active" id="about">
            <div class="twelve column">
                <p>{{summary}}</p>
            </div>
        </div>
    `
})
var projects = Vue.extend({
    data: function() {
        return {
            projects: [
                {title: 'Brisk Forms', url: 'https://briskforms.com/', desc: 'a Ruby on Rails web app for securely handling HTML form submissions from static sites.'},
                {title: 'VSCode Shader Toy', url: 'https://github.com/stevensona/shader-toy', desc: 'Visual Studio Code extension that provides a live preview of a GLSL shader program.'},
                
                {title: 'Chip8 Emulator', url: 'https://github.com/stevensona/chip8', desc: 'The classic CHIP8 virtual machine implemented in modern C++ with <a href="https://www.libsdl.org/index.php">SDL2</a>.'},
                {title: 'clubcast', url: 'http://clubcast.xyz/', desc: 'a podcast aggregator written in Ruby using my own <a href="https://github.com/stevensona/podcasts.rb">podcasts</a> library.'},
                {title: 'ZooM', url: 'https://github.com/stevensona/zoom', desc: 'HTML document generation DSL in C++.'},
                //{title: '', url: '', desc: ''},
                //{title: 'Type Mismatch', url: 'http://typemismat.ch/', desc: 'A virtual grab bag of programming tricks and tutorials powered by <a href="https://ghost.org/">Ghost</a>.'},
            ],
        };
    },
    template: `
        <div class="row panel" id="projects">
            <div class="twelve column">
                <div class="project-list">
                    <div v-for="project in projects" class="project">
                        <span class="project-title"><a href="{{project.url}}">{{project.title}}</a></span>
                        <span class="project-desc">{{{project.desc}}}</span>
                    </div>
                </div>
            </div>
        </div>
    `
});
var contact = Vue.extend({
    template: `
        <div class="row panel" id="contact">
            <form method="post" action="https://www.briskforms.com/go/f6fd2e8654a89a0971810c58e35440a6">
                <div class="row">
                    <div class="six columns">
                        <label for="contact-email">Your email</label>
                        <input class="u-full-width" id="contact-email" type="email" name="email">
                    </div>
                    <div class="six columns">
                        <label for="contact-subject">Subject</label>
                        <input class="u-full-width" id="contact-subject" type="text" name="subject">
                    </div>
                </div>
                <label for="contact-message">Message</label>
                <textarea class="u-full-width" placeholder="Hi Adam" id="contact-message" name="message"></textarea>
                <input class="button-primary" value="Submit" type="submit">
            </form>
        </div>
    `
});

var app = Vue.extend({});

var router = new VueRouter();
router.map({
    '/': { component: about },
    '/projects': { component: projects },
    '/contact': { component: contact },
})

router.start(app, '#app');

