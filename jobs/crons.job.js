/**
 * Starts scheduled cron jobs
 */
 startJobs = () => {

    /// Clean all initiated order
    cron.schedule(DAILY, async () => {
        // update abadoned orders
    });

}

module.exports = startJobs