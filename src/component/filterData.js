const filterByDomainRatting = (data) => {
    let filteredData = data.filter((i) => {
        let DR = i['Domain Rating'];

        if (DR >= 15 && DR <= 79) {
            return i;
        }
    });
    return filteredData;
};

const filterByUniqueTitle = (data) => {
    let jobs = data.map(function (item) {
        return item['Content Title'];
    });

    let jobsUnique = jobs.filter(function (item, index) {
        if (jobs.indexOf(item['Content Title']) >= index) {
            delete data[index];
        }
    });
    return data;
};

const getDomainFromURLs = (data) => {
    let filteredData = data.map((i) => {
        let url = i['Content URL'];
        console.log('url', url);

        i['Content URL'] = url
            .match(/([^:]*:\/\/)?([^\/]*\.)*([^\/\.]+)\.[^\/]+/g)[0]
            .replace(/.+\/\/|www.|\]+/g, '');
        console.log('new url', i['Content URL']);

        return i;
    });
    return filteredData;
};

export const filterCSVdata = (data) => {
    console.log('Length Of Data = ', data.length);

    let DR_filtered = filterByDomainRatting(data);
    console.log('DR_filtered', DR_filtered);

    let WithDomain = getDomainFromURLs(DR_filtered);
    console.log('with domain', WithDomain);

    // let UT_filtered = filterByUniqueTitle(DR_filtered);
    // console.log('UT_filtered', UT_filtered);
};
