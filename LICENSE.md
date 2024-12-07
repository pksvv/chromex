License Agreement for "WebPage Split Capture" Application

1. Introduction

This license agreement ("Agreement") is a legal agreement between you ("Licensee") and Vipul Gaur ("Licensor") governing the use of the provided software and codebase.

2. Grant of License

Licensor grants Licensee a non-exclusive, non-transferable, revocable license to use the "WebPage Split Capture" application solely for personal or internal business purposes.

3. Restrictions

Licensee shall not:

Redistribute, sublicense, sell, or copy the software, code, or design for any commercial or personal use.

Use the software to create derivative works for commercial purposes without Licensor's written consent.

Remove or alter copyright notices or branding.

4. Ownership

All rights, title, and interest in and to the software remain solely with Licensor. This Agreement does not grant Licensee any ownership rights to the software.

5. Modifications and Contributions

Licensee may modify the code for personal or internal business purposes. Contributions to the software, if accepted by Licensor, will be governed under an open-source contribution agreement.

6. Warranty Disclaimer

The software is provided "as is," without warranty of any kind, express or implied. Licensor disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

7. Limitation of Liability

Licensor shall not be liable for any damages resulting from the use or inability to use the software, including but not limited to loss of data, loss of profits, or business interruption.

8. Termination

This Agreement will terminate automatically if Licensee fails to comply with any of its terms. Upon termination, Licensee must cease all use of the software and destroy all copies.

9. Governing Law

This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.

10. Entire Agreement

This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements or understandings regarding the software.

11. Updates to the Agreement

Licensor reserves the right to update this Agreement at any time. Updated terms will be posted along with the software.

12. Additional Notes

a. Handling Large Images

Timeouts: For very long pages or high numbers of splits, processing might take longer, potentially causing timeouts in serverless environments.

Limits: Consider setting limits on the maximum number of splits or page height.

b. Security Considerations

Input Sanitization: Ensure that user inputs are sanitized to prevent injection attacks.

CORS: Since API routes are part of the same Next.js application, CORS issues are minimized.

c. Styling

Customize the styles in globals.css and within components to match your design preferences.

13. Summary

You now have all the necessary JavaScript files and code to build the "WebPage Split Capture" application without TypeScript, using Next.js with the app directory, and placing your components appropriately within the src directory.

Components are located in src/components/.

Pages and API routes are within src/app/.

Global styles can be added to src/app/globals.css.

Dependencies are managed via package.json.

14. Need Further Assistance?

If you encounter any issues or have questions about specific parts of the code, feel free to ask, and I’ll be happy to help!