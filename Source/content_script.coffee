words = [
  'Reverse Racism'
  'Racism'
  'Equality'
  'SJW'
  'Weight'
  'Rape'
  'Ableism'
  'Ableist'
  'Social Justice'
  'Feminism'
  'MRA'
  'Masculism'
  'multiple'
  'Misandry'
  'Misogyny'
  'Genderfluid'
  'Genderqueer'
  'Demisexual'
  'Otherkin'
  'Headmates'
  'White people'
  'Fatphobia'
  'obesity'
  'Thin Privilege'
  'Privilege'
  'POC'
  'Black'
  'Curves'
  'kin'
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
  v = v.replace(new RegExp(exp, 'gi'), 'hodor') for exp in words
  textNode.nodeValue = v

walk document.body