const info={ association: { price: '$4.00', title: 'Articles of Association' },
'bor-broadside': { price: '$4.00', title: 'Bill of Rights: Broadside' },
'bor-house': { price: '$2.00', title: 'Bill of Rights: House Version' },
'bor-senate': { price: '$2.00', title: 'Bill of Rights: Senate Draft' },
'boston-massacre': { price: '$5.00', title: 'Boston Massacre' },
'boston-pass': { price: '$0.50', title: 'Boston Pass' },
butchery: 
 { price: '$2.00',
   title: 'A memorial to those who fell at Lexington and Concord' },
clemency: { price: '$1.00', title: 'A Resolution for Clemency' },
commission: 
 { price: '$1.00',
   title: 'Form for commissioning officers in the Army of the United Colonies' },
constitution: 
 { price: '$5.00',
   title: 'First Massachusetts printing of the Constitution' },
dunlap: 
 { price: '$4.00',
   title: 'First printing of the Declaration of Independence' },
'dunmore-congress': 
 { price: '$2.00',
   title: 'Virginia Proclamation Against the Congress' },
'dunmore-slaves': 
 { price: '$2.00',
   title: 'Virginia proclamation freeing slaves' },
farewell: 
 { price: '$6.00',
   title: 'George Washington\'s Farewell Address' },
fasting: 
 { price: '$3.00',
   title: 'A proclamation for a day of fasting and prayer' },
goddard: 
 { price: '$4.00',
   title: 'First Official Printing of the Declaration of Independence' },
'gun-control': { price: '$2.00', title: 'Order to Surrender Firearms' },
howe: 
 { price: '$2.00',
   title: 'Handbill to recruit for the loyalists' },
indenture: { price: '$1.00', title: 'Indenture Form' },
'naval-bond': { price: '$2.00', title: 'Privateer\'s Bond' },
oath: { price: '$1.00', title: 'Oath Of Allegiance' },
'patrick-henry': { price: '$2.00', title: 'Wanted Poster for Patrick Henry' },
privateers: { price: '$3.00', title: 'Rules for Privateers' },
propaganda: { price: '$2.00', title: 'Wartime Propaganda' },
seamen: 
 { price: '$2.00',
   title: 'John Paul Jones advertises to recruit a crew' },
'secret-draft': 
 { price: '$10.00',
   title: 'Secret First Draft of the Constitution' },
shays: 
 { price: '$3.00',
   title: 'A proclamation offering clemency to the Shaysites' },
'spy-1775': { price: '$5.00', title: 'Massachusetts Spy, May 3, 1775' },
'spy-1776': { price: '$5.00', title: 'Massachusetts Spy, July 17, 1776' },
'stamp-act': { price: '$2.00', title: 'The repeal of the Stamp Act' },
'tea-party': 
 { price: '$1.00',
   title: 'A handbill warning of the dangers of landing East India tea in Boston' } }

function init(){


 
 loc=location.pathname.split("/")[2]   
 tag("link").href = `https://revdocs.blogspot.com/2025/06/${loc}.html`
 tag("url").innerHTML = `https://revdocs.blogspot.com<br>/2025/06/${loc}.html`
 tag("title").innerHTML = info[loc].title
 tag("price").innerHTML = info[loc].price
}

function tag(id){return document.getElementById(id)}