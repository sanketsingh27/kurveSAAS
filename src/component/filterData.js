import uniqBy from 'lodash/uniqBy';
import groupBy from 'lodash/groupBy';
import forEach from 'lodash/forEach';
import { maxBy } from 'lodash';

const filterByDomainRatting = (data) => {
    let filteredData = data.filter((i) => {
        let DR = i['Domain Rating'];

        if (DR >= 15 && DR <= 79) {
            return i;
        }
    });
    return filteredData;
};

const getDomainFromURLs = (data) => {
    let filteredData = data.map((i) => {
        let url = i['Content URL'];

        i['Content URL'] = url
            .match(/([^:]*:\/\/)?([^\/]*\.)*([^\/\.]+)\.[^\/]+/g)[0]
            .replace(/.+\/\/|www.|\]+/g, '');
        return i;
    });
    return filteredData;
};

const filterByUniqueTitle = (data) => {
    let unique = uniqBy(data, 'Content Title');
    return unique;
};

//get unique domain with higest domain rating
const uniqueDomainWithMaxDomainRating = (data) => {
    let _daata = groupBy(data, 'domain');

    let maxDomainRating = [];
    forEach(_daata, function (value, key) {
        let maax = maxBy(value, 'Domain Rating');
        maxDomainRating.push(maax);
    });

    return maxDomainRating;
};

const filterByKeyWord = (data, restricted_KW) => {
    let search = restricted_KW.split(',');
    console.log("SEARCH ---'", search);

    if (!search[0]) {
        console.log('DATA ---', data);
        return data;
    }
    let newData = [];
    search.forEach((term) => {
        console.log('term ==>', term);

        let tempArr = data.filter((item) => {
            return !(
                item['domain'].includes(term) ||
                item['Content URL'].includes(term) ||
                item['Content Title'].includes(term)
            );
        });
        newData = [...tempArr];
        data = newData;
    });
    return newData;
};

export const filterCSVdata = (data, keys) => {
    console.log('Length Of Data = ', data.length);

    let DR_filtered = filterByDomainRatting(data);
    console.log('DR_filtered', DR_filtered);

    let WithDomain = getDomainFromURLs(DR_filtered);
    console.log('with domain', WithDomain);

    let UT_filtered = filterByUniqueTitle(WithDomain);
    console.log('UT_filtered', UT_filtered);

    let DomainWithMax_DR = uniqueDomainWithMaxDomainRating(UT_filtered);
    console.log('DomainWithMax_DR', DomainWithMax_DR);

    let KW_filtered = filterByKeyWord(DomainWithMax_DR, keys);
    console.log('KEYWORD FILTERED DATA', KW_filtered);
    return KW_filtered;
};
