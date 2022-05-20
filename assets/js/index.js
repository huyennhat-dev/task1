function onChange() {
    const $ = document.querySelector.bind(document);

    const teamNumber = $('#team-number')
    const member_list_1 = $('#member-list_1')
    const member_list_2 = $('#member-list_2')
    var html = [];
    if (teamNumber.value == 1) {

        html = '<div class="each-member">'
        html += ' <div class="member-title"> Thành viên 1 </div>'
        html += '<div class="member-form">'
        html += ' <div class="form-group">'
        html += '<label class="" for="">Họ và tên </label>'
        html += ' <input type="text" name="fullName_1" class="" value="" id="" required placeholder="Nguyễn Văn A">'
        html += '</div>'
        html += '<div class="form-group">'
        html += '<label class="" for="">Email </label>'
        html += ' <input type="email" name="email_1" class="" value="" id="" required placeholder="example@gmail.com">'
        html += '</div>'
        html += ' <div class="form-group">'
        html += '<label class="" for="">Số điện thoại </label>'
        html += ' <input type="number" name="phoneNumber_1" class="" value="" id="" required placeholder="09xxxxxxxx">'
        html += '</div>'
        html += ' <div class="form-group">'
        html += '<label class="" for="">Kĩ năng </label>'
        html += ' <input type="text" name="skill_1" class="" value="" id="" required placeholder="Laravel, NodeJs,...">'
        html += '</div>'
        html += '<div class="form-group">'
        html += ' <label class="" for="">Số tài khoản </label>'
        html += '<input type="number" name="bankNumber" class="" value="" id="" placeholder="Không bắt buộc">'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        member_list_1.innerHTML = html
        member_list_2.innerHTML = ''
    }
    if (teamNumber.value > 1) {

        for (var i = 2; i <= teamNumber.value; i++) {
            html[i] = '<div class="each-member">'
            html[i] += ' <div class="member-title"> Thành viên ' + i + ' </div>'
            html[i] += '<div class="member-form">'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Họ và tên </label>'
            html[i] += ' <input type="text" name="fullName_' + i + '" class="" value="" id="" required placeholder="Nguyễn Văn A">'
            html[i] += '</div>'
            html[i] += '<div class="form-group">'
            html[i] += '<label class="" for="">Email </label>'
            html[i] += ' <input type="email" name="email_' + i + '" class="" value="" id="" required placeholder="example@gmail.com">'
            html[i] += '</div>'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Số điện thoại </label>'
            html[i] += ' <input type="number" name="phoneNumber_' + i + '" class="" value="" id="" required placeholder="09xxxxxxxx">'
            html[i] += '</div>'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Kĩ năng </label>'
            html[i] += ' <input type="text" name="skill_' + i + '" class="" value="" id="" required placeholder="Laravel, NodeJs,...">'
            html[i] += '</div>'
            html[i] += '</div>'
            html[i] += '</div>'
        }
        console.log(html)

        member_list_2.innerHTML = html
    }
}