$(() => {
    const inp_name = $('#name');
    const inp_age = $('#age');
    const inp_city = $('#city');
    const btn_submit = $('#submit');
    const tbl_persons = $('#persons');

    function refreshPersonTable(persons) {
        tbl_persons.empty();
        tbl_persons.append(
            `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>`
        )

        for (let person of persons) {
            tbl_persons.append(
                `<tr>
                    <td>${person.id}</td>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>`
            )
        }
    }

    $.get('/api/persons', function (data) {
        refreshPersonTable(data);//'data' here is persons sent by api
    })

    btn_submit.click(function () {
        $.post('/api/persons',
            {//this data will be sent to the bodyParser
                name: inp_name.val(),
                age: inp_age.val(),
                city: inp_city.val()
            },
            function (data) {//'data' is here from redirection from api.
                refreshPersonTable(data);
            });
    })

})

