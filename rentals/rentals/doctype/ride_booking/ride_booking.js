// Copyright (c) 2024, Yash and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},

    rate(frm){
        //recalculate total
        frm.trigger("update_total_amount")

    },
    update_total_amount(frm){
        let total_d = 0;
        for(let item of frm.doc.items){
            total_d += item.distance;
        }

        const amount_t = frm.doc.rate * total_d;
        frm.set_value("amount",amount_t)

    }
});


frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
    distance(frm,cdt,cdn){
        frm.trigger("update_total_amount")
        
    },
    items_remove(frm){
        frm.trigger("update_total_amount")
    }
})
