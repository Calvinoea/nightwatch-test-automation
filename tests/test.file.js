module.exports = {
    'Filling out form': (client) => {
        client.url('https://www.ultimateqa.com/filling-out-forms')
            .waitforElementVisible('body', 1000)
            .assert.title('Filling Out Forms - Ultimate QA')
            .waitforElementVisible('#et_pb_contact_name_0', 'Dimitri')
            .setValue('#et_pb_contact_message_0', 'this is a paragraph')
            .click('.et_pb_contact_submit')
            .waitforElementVisible('#et_pb_contact_form_0')
            .expect.element('#et_pb_contact_form_0').text.to.equal('Form filled out')
    }
}