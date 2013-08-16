words = [
  'Reverse Rac'
  'Racism'
  'Equalit'
  'SJW'
  'Weight'
  'Rape'
  'Ableism'
  'Ableist'
  'Social Justice'
  'Femin'
  'MRA'
  'Masculism'
  'multiple'
  'Misander'
  'Misandr'
  'Misogyny'
  'Genderfluid'
  'Genderqueer'
  'appropr'
  'Demisexual'
  'Otherkin'
  'Headmates'
  'White people'
  'Fatphobia'
  'obesity'
  'Thin Privilege'
  'Privilege'
  'POC'
  'patriarchy'
  'Black'
  'Curves'
  'Cultural Appropriation'
  'Culture'
  'Cis'
  'policing'
  'fatphobia'
  'wolf'
  'Trans'
  'LGBT'
  'Queer'
  'Rape'
  'Solidarity'
  'Patriachy'
  'Pride'
  'Oppressed'
  'Oppression'
  'Tumblr'
  'Womyn'
  'Wymyn'
  'Feminist'
  'Ship'
  'Fandom'
  'demon'
  'devil'
  'satan'
  'Probesity'
  'Kyriarchy'
  'Heightism'
  'Discrimination'
  'Queer'
  'Sass'
  'WOC'
  'Heterosexual'
  'White privilege'
  'Disabled'
  'estrogen'
]

ucwords = (string) ->
    string.charAt(0).toUpperCase() + string.slice(1);

walk = (node) ->
  child = undefined
  next = undefined
  switch node.nodeType
    when 1, 9, 11
      child = node.firstChild
      while child
        next = child.nextSibling
        walk child
        child = next
    when 3
      handleText node

handleText = (textNode) ->
  v = textNode.nodeValue
  v = v.replace(new RegExp(exp.toUpperCase(), 'g'), 'HODOR') for exp in words
  v = v.replace(new RegExp(ucwords(exp), 'g'), 'Hodor') for exp in words
  v = v.replace(new RegExp(exp, 'gi'), 'hodor') for exp in words
  textNode.nodeValue = v

walk document.body