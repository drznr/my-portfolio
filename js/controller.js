$(document).ready(renderPortfolios);



function renderPortfolios() {
    var projs = getProjsForDisplay();
    var strHtml = '';

    strHtml += projs.map(proj => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onclick="onProjClicked('${proj.id}')" href="#portfolioModal">
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="${proj.imgUrl}" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>
        </div>`;
    }).join('');

    var $elProjs = $('.projs');
    $elProjs.html(strHtml);
}

function onProjClicked(id) {
    var proj = findProjById(id);
    var dateToDisplay = [
        new Date(proj.publishedAt).toString().split(' ')[1],
        new Date(proj.publishedAt).toString().split(' ')[2],
        new Date(proj.publishedAt).toString().split(' ')[3]].join(' ');
    var labelsToDisplay = proj.labels.map(label => `<li class="badge badge-primary my-label">${label}</li>`);

    $('#portfolioModal .name').html(proj.name);
    $('#portfolioModal .title').html(proj.title);
    $('#portfolioModal .proj-img').attr('src', proj.imgUrl);
    $('#portfolioModal .desc').html(proj.desc);
    $('#portfolioModal .date').html(dateToDisplay);
    $('#portfolioModal .list-inline').html(labelsToDisplay);
    $('#portfolioModal .link').attr('href', proj.url);
}

function onFormSubmit() {
    var $elSubject = $('#subjectInput');
    var $elMessage = $('#subjectInput');
    var $elEmail = $('#emailInput');

    if (!$elSubject.val() || !$elMessage.val() || !$elEmail.val()) return;
    
    var adress = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dresnerdaniel@gmail.com&su=${$elSubject.val()}&body=${$elMessage.val()}`;
    $elSubject.val('');
    $elMessage.val('');
    $elEmail.val('');
    window.open(adress, '_blank');
}
