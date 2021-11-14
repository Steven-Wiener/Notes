////////////////////////
// Mutation Observer //
//////////////////////
/*
Provides ability to watch for changes being made to the Document Object Model (DOM)
tree. Designed as replacement for older Mutation Events feature.
*/
// Select the node that will be observed for mutations
var targetNode = document.getElementById('some-id');
// Alternatively...
var targetNode = document.querySelector('#some-id');

// Options for the observer (which mutations to observe)
// Minimum, one of childList, attributes, and/or characterData must be true when you call observe(). Otherwise, a TypeError exception will be thrown.
var config = {
	// Array of attribute names to be monitored. Makes 'attributes' option unnecessary
	attributeFilter: [ 'status', 'username', 'etc' ],
	// Set true to record prev value of any attribute that changes when monitoring the node(s) for attribute changes. Also makes 'attributes' option unnecessary
	attributeOldValue: true,
	// Set to true to watch for changes to value of attributes on node(s) being monitored
	attributes: true,
	// If true, callback function is called any time contents of text node are changed, including nodes based on the Text, ProcessingInstruction, and Comment interfaces
	characterData: true,
	// Similar to attributeOldValue
	characterDataOldValue: true,
	// Set to true to monitor target node (and, if subtree is true, its decendants) for the addition or removal of new child nodes
	childList: true,
	// Set to true to extend monitoring to the entire subtree of nodes rooted at target. All other options are then extended to all nodes in subtree
	subtree: true
};

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    mutationsList.forEach(function(mutation) {
		switch (mutation.type) {
			case 'attributes':
				switch (mutation.attributeName) {
					case 'status':
						// example function :
						userStatusChanged(mutation.target.username, mutation.target.status);
						break;
					case 'username':
						// Uses 'attributeOldValue' option to get previous value of mutation
						console.log(`Attribute name ${mutation.attributeName} changed to ${mutation.target[attributeName]} (was ${mutation.oldValue})`);
						break;
					default:
						// Still valid since 'attributes' is true when 'attributeFilter' is nonempty
						console.log(`The ${mutation.attributeName} attribute was modified.`);
						break;
				}
				break;
			case 'childList':
				console.log('A child node has been added or removed.');
				break;
        }
    });
};
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();