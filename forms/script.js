(() => {
    const persona = {
        email: 'william@aaa.com',
        name: 'William Paulo',
        contact: '(11) 967517494',
        links: 'https://github.com/',
        bio: 'Qualquer coisa'
    }

    const $$ = element => document.querySelectorAll(element);
    const fields = $$('[aria-label]');
    
    for (const element of fields) {
        const value = element.getAttribute('aria-label')

        if (/(e-mail|email)/i.test(value)) {
            element.value = persona.email;
        }

        if (/(nome)/i.test(value)) {
            element.value = persona.name;
        }

        if (/(contato)/i.test(value)) {
            element.value = persona.contact;
        }

        if (/(github|ginkedin|blog)/i.test(value)) {
            element.value = persona.links;
        }

        if (/(bio|biografia)/i.test(value)) {
            element.value = persona.bio;
        }
    }
    
})();