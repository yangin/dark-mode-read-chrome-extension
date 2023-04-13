/**
 * Add a listener to the browser action icon click
 */
chrome.action.onClicked.addListener((tab) => {
  // Check if the icon is dark or light
  const isDark = !!this.chrome.isDark

  this.chrome.isDark = !isDark

  // Update the icon
  chrome.action.setIcon({path: `./images/${isDark ? 'light' : 'dark'}128.png`}, () => { 
   /* ... */
  });
  console.log('onClicked', this.chrome.isDark)
  // Execute the script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: [!!this.chrome.isDark ? "toggle-dark.js" : "toggle-light.js"],
  });
});


/**
 * Add a listener to tab changes
 */
chrome.tabs.onActivated.addListener((activeInfo) => {
  // Check if this.chrome.isDark exists after a tab is changed
  chrome.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    files: [!!this.chrome.isDark ? "toggle-dark.js" : "toggle-light.js"],
  });
});

