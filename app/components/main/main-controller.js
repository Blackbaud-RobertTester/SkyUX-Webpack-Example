export class MainController {
    constructor($q, bbModal) {
        this.applicationName = 'Sky-Webpack-ES6';
        this.$q = $q;
        this.bbModal = bbModal;

        this.date1 = '5/28/2015';
        this.date2 = '2015-05-17T00:00:00';
        this.placeholder = 'Your date here';
        this.minDate = new Date('5/21/2014');
        this.maxDate = new Date();
    }

    formatValue(value) {
        return this.$q(function (resolve) {
            let formattedValue = value;
            let formattingErrorMessage;

            if (value.toUpperCase() !== value) {
                formattingErrorMessage = 'Any letters should be capitalized.';
            } else {
                formattedValue = '[' + value.toUpperCase() + ']';
            }

            resolve({
                formattedValue: formattedValue,
                formattingErrorMessage: formattingErrorMessage
            });
        });
    }

    openModal() {
        this.bbModal.open({
            controller: 'DatepickerModalController as dateModalCtrl',
            templateUrl: 'demo/datepicker/datepickermodal.html'
        });
    }

    setDate() {
        this.date1 = 'aaa';
    }
}

export class DatepickerModalController {
    constructor() {
        this.date = '';
    }
}

export class ChecklistTestController {
    constructor() {
        this.items = [
            { column: 'Constituent summary', description: 'Summary information about the constituent who gave the gift' },
            { column: 'Soft credits', description: 'Soft credits for the gift' },
            { column: 'Amount', description: 'Amount of the gift' }
        ];

        this.listItems = [
            {
                title: 'Constituent summary',
                description: 'Summary information about the constituent who gave the gift',
                category: 'Constituent'
            },
            {
                title: 'Soft credits',
                description: 'Soft credits for the gift',
                category: 'Giving'
            },
            {
                title: 'Amount',
                description: 'Amount of the gift',
                category: 'Giving'
            },
            {
                title: 'Sweatshirt',
                description: 'This column has nothing to do with the other ones',
                category: 'Miscellaneous',
                inactive: true
            }
        ];

        this.selectedItems = [];
        this.includeSearch = true;
        this.listItemsSingle = this.listItems.slice();

        this.loadItems();
    }

    loadItems(searchText) {
        const filteredItems = [];
        let i;

        for (i = 0; i < this.items.length; i++) {
            if (!searchText || this.items[i].column.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 || this.items[i].description.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                filteredItems.push({ column: this.items[i].column, description: this.items[i].description });
            }
        }

        this.items = filteredItems;
    }
}
