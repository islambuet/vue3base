function initialData() {
    var localStorageAuthTokenStr='authToken';
    var localStorageLanguageStr='language';
    var language = localStorage.getItem(localStorageLanguageStr) ? localStorage.getItem(localStorageLanguageStr) : 'bn'; 
    var labels= {};
    var language_files = [
        { language: language, file: 'languages/action.js' },
        { language: language, file: 'languages/button.js' },
        { language: language, file: 'languages/label.js' },
        { language: language, file: 'languages/message.js' },
        { language: language, file: 'languages/response.js' },
    ];
    try {
        for (var i = 0; i < language_files.length; i++) {
            var language = language_files[i].language;
            var filedata = require(`@/${language_files[i].file}`);
            for (var item in filedata.labels) {
                labels[item] = filedata.labels[item][language] ? filedata.labels[item][language] : item;
            }
        }
    }
    catch (error) {
        console.log(error);
    }

    return {
        localStorageAuthTokenStr:localStorageAuthTokenStr,
        localStorageLanguageStr:localStorageLanguageStr,
        language: language,
        labels: labels,
        user: {
        authToken: localStorage.getItem(localStorageAuthTokenStr) ? localStorage.getItem(localStorageAuthTokenStr) : '',
        id: 0,
        name: language == 'en' ? 'Guest' : 'অতিথি',
        info:{},
        tasks: []
        },    
        baseUrl: process.env.BASE_URL,
        statusTaskLoaded: 0,    //Loading=0,success=1,failed=-1,acceesdenied=-2, site_off_line = -3  for all page
        statusDataLoaded: 1,    //Loading=0,loaed=1    
        validationErrors:'',
        dbStatus:{'YES':'Yes','NO':'No','ACTIVE':'Active','INACTIVE':'In-Active','DELETE':'Deleted'}
    }
}
const systemFunctions={
    ...initialData(),            
    getLanguage(){
        return this.language;
    },
    changeLanguage(language)
    {
        localStorage.setItem(this.localStorageLanguageStr,language);  
        window.location.reload(); 
    },
    addLanguages: function () {
        
    },
    getLabel(key) {        
        return this.labels[key] ? this.labels[key] : key;
    },
    setPageTitle(title) {
        document.title = title;
    },  
}
export default systemFunctions