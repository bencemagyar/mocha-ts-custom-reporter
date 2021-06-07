import { reporters, Runner, Suite, Test } from 'mocha';

const { EVENT_RUN_BEGIN, EVENT_RUN_END, EVENT_TEST_FAIL, EVENT_TEST_PASS, EVENT_SUITE_BEGIN, EVENT_SUITE_END } = Runner.constants;

// This reporter outputs test results, indenting two spaces per suite
export class CustomReporter extends reporters.Base {
  private indents = 0;

  constructor(runner: Runner) {
    super(runner);
    const stats = runner.stats;

    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.info('start');
      })
      .on(EVENT_SUITE_BEGIN, (suite: Suite) => {
        this.increaseIndent();
      })
      .on(EVENT_SUITE_END, (suite: Suite) => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PASS, (test: Test) => {
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(`${this.indent()}pass: ${test.fullTitle()}`);
      })
      .on(EVENT_TEST_FAIL, (test: Test, err: any) => {
        console.log(`${this.indent()}fail: ${test.fullTitle()} - error: ${err.message}`);
      })
      .once(EVENT_RUN_END, () => {
        console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);
      });
  }

  private indent() {
    return Array(this.indents).join('  ');
  }

  private increaseIndent() {
    this.indents++;
  }

  private decreaseIndent() {
    this.indents--;
  }
}